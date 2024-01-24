import React from 'react'
import ToolTip from '../../Components/ToolTip'

export default function TechnologiesCard() {
    return (
        <div class="pr-5">
            <h1 className='text-bold text-4xl font-bold' style={{ color: '#FF6947' }}>Technologies</h1>
            <br></br>
            <div class="p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ backgroundColor: '#121F32' }}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Backend</h5>
                <div class="flex">
                    <ToolTip name="NodeJS" experience="4 years" color="success"></ToolTip>
                    <ToolTip name="ASP.NET" experience="3 years" color="purple"></ToolTip>
                    <ToolTip name="NET CORE" experience="2 years" color="purple"></ToolTip>
                    <ToolTip name="Java" experience="1 year" color="failure"></ToolTip>
                </div>
            </div>
            <br></br>
            <div class="p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ backgroundColor: '#121F32' }}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">FrontEnd</h5>
                <div class="flex">
                    <ToolTip name="ReactJS" experience="4 years" color="indigo"></ToolTip>
                    <ToolTip name="Vue JS" experience="2 years" color="success"></ToolTip>
                    <ToolTip name="Angular" experience="2 years" color="failure"></ToolTip>
                </div>
            </div>
            <br></br>
            <div class="p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ backgroundColor: '#121F32' }}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Cloud</h5>
                <div class="flex">
                    <ToolTip name="AWS" experience="4 years" color="warning"></ToolTip>
                    <ToolTip name="Azure" experience="2 years" color="indigo"></ToolTip>
                </div>
            </div>
            <br></br>
            <div class="p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ backgroundColor: '#121F32' }}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Other Technologies</h5>
                <div class="flex">
                    <ToolTip name="MYSQL" experience="4 years" color="indigo"></ToolTip>
                    <ToolTip name="Postgres" experience="3 years" color="indigo"></ToolTip>
                    <ToolTip name="SQL Server" experience="3 years" color="indigo"></ToolTip>
                    <ToolTip name="MongoDB" experience="1 year" color="indigo"></ToolTip>
                    <ToolTip name="IIS" experience="2 years" color="indigo"></ToolTip>
                    <ToolTip name="GCP" experience="2 years" color="failure"></ToolTip>
                </div>
                <br></br>
                <div class="flex">
                    <ToolTip name="Git" experience="4 years" color="info"></ToolTip>
                    <ToolTip name="TFS" experience="3 years" color="info"></ToolTip>
                    <ToolTip name="Python" experience="1 year" color="warning"></ToolTip>
                    <ToolTip name="TensowFlow" experience="1 year" color="warning"></ToolTip>
                </div>
            </div>

        </div>
    )
}
