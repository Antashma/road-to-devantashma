/* 
React Coding Question Example

💫 You are building a small dashboard that displays a list of job applications.
Create a React component <ApplicationList /> that:
- Fetches job application data from https://api.example.com/applications when the component mounts.
- Displays a loading message while the data is being fetched.
- Displays an error message if the request fails.
- Renders each application’s company and status in a list once the data is loaded.
- Uses a button to refetch the data manually.

✅ What they’re looking for
- Understanding of React hooks (useState, useEffect)
- Clean component organization
- Ability to handle async logic and UI states
- Concise and readable JSX
- Optional: separation of API logic into a helper function
*/
import { useState, useEffect } from "react";

const jobAppsUrl = "https://api.example.com/applications";

export default function ApplicationList() {
    const [jobAppData, setJobAppData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchJobAppsData() {
        setErrorMsg(null);
        setIsLoading(true);
        try {
            const response = await fetch(jobAppsUrl);
            if (!response.ok) {
                throw new Error("Unable to fetch data: " + response);
            } else {
                const result = await response.json();
                setJobAppData(result);
            }
        } catch (error) {
            console.error({ error, response });
            setErrorMsg(
                error.message || "Something went wrong. Please try again later."
            );
        } finally {
            setIsLoading(false);
        }
    }

    function displayJobApps() {
        return jobAppData.map((job) => {
            return (
                <li key={job.id}>
                    {job.role} @{job.company}: {job.status}
                </li>
            );
        });
    }

    useEffect(() => {
        fetchJobAppsData();
    }, []);

    return (
        <div>
            <h1>Job Applications</h1>
            {isLoading && <p>Loading applicatons...</p>}
            {errorMsg && <p>{errorMsg}</p>}
            <div>
                {jobAppData.length === 0 && !isLoading && !errorMsg ? (
                    <p>"No job applications yet. Get to applying!"</p>
                ) : (
                    <ul>{displayJobApps()}</ul>
                )}
            </div>
            <button onClick={fetchJobAppsData}>Refresh</button>
        </div>
    );
}
