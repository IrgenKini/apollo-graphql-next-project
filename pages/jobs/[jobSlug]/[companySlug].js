import { gql } from "@apollo/client";
import client from "../../../apollo-client";

const Job = ({ job }) => {
  return (
    <div>
      <h1>{job.title}</h1>
      <h2>From {job.company.name}</h2>
      {job.description}
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Jobs {
        jobs {
          id
          title
          slug
          company {
            id
            name
            slug
            websiteUrl
          }
        }
      }
    `,
  });

  const jobs = data.jobs.slice(0, 15);

  return {
    paths: jobs.map((job) => ({
      params: { jobSlug: job.slug, companySlug: job.company.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // const input = JSON.stringify({
  //   jobInput: {
  //     jobSlug: "senior-fullstack-engineer-platform",
  //     companySlug: "segment",
  //   },
  // });
  // const { data } = await client.query({
  //   query: gql`
  //     query Job($jobInpput: ${input}){
  //       job(input: $jobInpput ) {
  //         id
  //         description
  //         locationNames
  //         slug
  //         title
  //       }
  //     }
  //   `,
  // });

  const { data } = await client.query({
    query: gql`
      query Jobs {
        jobs {
          id
          title
          slug
          description
          company {
            id
            name
            slug
            websiteUrl
          }
        }
      }
    `,
  });

  const requiredJob = data.jobs.find(
    (job) =>
      job.slug === context.params.jobSlug &&
      job.company.slug === context.params.companySlug
  );

  return {
    props: {
      job: requiredJob,
    },
  };
}

export default Job;
