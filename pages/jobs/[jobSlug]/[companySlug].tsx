import { useMutation } from "@apollo/client";
import client from "../../../apollo-client";
import { getAllJobs, getJob, mutateJob } from "../../../queries/queries";
import React from "react";

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
    commitment: {
      id: string;
    };
  };
}

const Job = ({ job }) => {
  const [createNewJob, { data, loading, error }] = useMutation(mutateJob);
  const [mutatedJob, setMutatedJob] = React.useState<any>(job);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <h1>{mutatedJob?.title}</h1>
      <div>
        From:{" "}
        {mutatedJob.company ? (
          mutatedJob?.company?.name
        ) : (
          <i>Company not specified </i>
        )}
      </div>
      <div>
        Location:{" "}
        {mutatedJob?.locationNames !== null && mutatedJob.locationNames !== ""
          ? mutatedJob?.locationNames
          : "Remote"}
      </div>
      <div style={{ maxHeight: "200px", overflow: "scroll" }}>
        {mutatedJob?.description}
      </div>
      <button
        onClick={() =>
          createNewJob({
            variables: {
              postJobInput: {
                title: "software developer",
                commitmentId: job.commitment.id,
                //companyName: job.company.name,
                companyName: "irgens",
                locationNames: "New York",
                userEmail: "irakini1@gmail.com",
                description: "Here goes the description",
                applyUrl: "url.com",
              },
            },
          }).then((data: any) => {
            setMutatedJob(data.data.postJob);
          })
        }
      >
        Add New
      </button>
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllJobs,
  });

  const jobs = data.jobs.slice(0, 15);

  return {
    paths: jobs.map((job) => ({
      params: { jobSlug: job.slug, companySlug: job.company.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { data } = await client.query<JobOutput, JobInput>({
    query: getJob,
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
