// components/ProfileTable.tsx
import React from 'react';

interface Profile {
    name: string;
    tools: string;
    skills: string;
    fieldOfStudy: string;
    degreeLevel: string;
    workExperience: string;
}

interface ProfileTableProps {
    profiles: Profile[];
}

const ProfileTable: React.FC<ProfileTableProps> = ({ profiles }) => {
    return (
        <div className="table-container">
            <input type="text" placeholder="Search profiles..." className="search-input" />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tools</th>
                        <th>Skills</th>
                        <th>Field of Study</th>
                        <th>Degree Level</th>
                        <th>Work Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((profile, index) => (
                        <tr key={index}>
                            <td>{profile.name}</td>
                            <td>{profile.tools}</td>
                            <td>{profile.skills}</td>
                            <td>{profile.fieldOfStudy}</td>
                            <td>{profile.degreeLevel}</td>
                            <td>{profile.workExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
                .table-container {
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 12px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f4f4f4;
                }
                .search-input {
                    margin-bottom: 20px;
                    padding: 10px;
                    width: 100%;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default ProfileTable;