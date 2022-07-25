import React from 'react'

function About() {
    return (
        <div>
            <h1 className="text-6xl">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details.
                Here's the live
                <a href='#github-finder'>
                    {' '}
                    Github Finder
                </a>{' '}
                project created by
                <strong>
                    <a href='https://github.com/Nasirkhan294'> Nasir Khan</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-gray'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:
                <a className='text-gray' href='https://github.com/Nasirkhan294'>
                    Nasir Khan
                </a>
            </p>
        </div>
    )
}

export default About