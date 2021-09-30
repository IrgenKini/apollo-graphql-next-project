import { gql } from "@apollo/client";

export const mutateJob = gql`
  mutation Mutation($postJobInput: PostJobInput!) {
    postJob(input: $postJobInput) {
      id
      description
      locationNames
      slug
      title
      company {
        name
      }
      commitment {
        id
      }
    }
  }
`;

export const getJob = gql`
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
      commitment {
        id
      }
    }
  }
`;

export const getAllJobs = gql`
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
`;
