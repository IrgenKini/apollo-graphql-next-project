import { gql } from "@apollo/client";
import client from "../../apollo-client";
import styles from "../../styles/Home.module.css";
import { getAllJobs } from "../../queries/queries";
import Link from "next/link";
import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <div className={styles.grid}>
      {jobs.map((job) => (
        <div key={job.id} className={styles.card}>
          <Link href={`/jobs/${job.slug}/${job.company.slug}`}>
            <h3>{job.title} &rarr;</h3>
          </Link>
          <p>{job.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: getAllJobs,
  });

  return {
    props: {
      jobs: data.jobs.slice(0, 15),
    },
  };
}

export default Jobs;
