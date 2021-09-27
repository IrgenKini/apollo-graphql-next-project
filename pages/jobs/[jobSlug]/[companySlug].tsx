import { gql } from "@apollo/client";
import client from "../../../apollo-client";

interface JobInput {
  jobInput: {
    jobSlug: String;
    companySlug: String;
  };
}

interface JobOutput {
  job: {
    id: string;
    locationNames: string;
    slug: string;
    title: string;
    description: string;
    company: {
      title: string;
    };
  };
}

const Job = ({ job }) => {
  return (
    <div>
      <h1>{job.title}</h1>
      <h2>From {job.company.name}</h2>
      <h2>
        Location: {job.locationNames !== null ? job.locationNames : "Remote"}
      </h2>
      <div style={{ maxHeight: "200px", overflow: "scroll" }}>
        {job.description}
      </div>
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
  const { data } = await client.query<JobOutput, JobInput>({
    query: gql`
      query Job($jobInput: JobInput!) {
        job(input: $jobInput) {
          id
          description
          locationNames
          slug
          title
          company {
            name
          }
        }
      }
    `,
    variables: {
      jobInput: {
        jobSlug: context.params.jobSlug,
        companySlug: context.params.companySlug,
      },
    },
  });

  return {
    props: {
      job: data.job,
    },
  };
}

export default Job;
