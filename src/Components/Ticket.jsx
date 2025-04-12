import React, { useEffect, useState } from 'react';
import ticketImage from '../Assets/images/pattern-ticket.svg';
import githubImage from '../Assets/images/icon-github.svg';
import logo from '../Assets/images/logo-full.svg';
import { useNavigate } from 'react-router-dom';

const Ticket = ({ avatarImage, githubUsername, username, email }) => {
    const [avatarUrl, setAvatarUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if any essential data is missing
        if (!avatarImage || !githubUsername || !username || !email) {
            navigate('/conference-ticket-generator/');
            return;
        }

        // Only create object URL if avatarImage is a valid blob
        const url = URL.createObjectURL(avatarImage);
        setAvatarUrl(url);

        // Always return a cleanup function
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [avatarImage, githubUsername, username, email, navigate]);

    return (
        <div className='ticket-page'>
            <h1>
                Congrats, <span className='gradient-text'>{username}</span><br />
                Your ticket is ready.
            </h1>
            <p>
                We've emailed your ticket to<br />
                <span className='highlighted-text'>{email}</span> and will send updates in<br />
                the run-up to the event.
            </p>

            <div className='ticket-wrapper' aria-labelledby="ticket-body" role="region">
                <img
                    src={ticketImage}
                    id='ticket-body'
                    alt="Your event ticket, showing event details"
                />
                <span id='ticket-number' aria-label="Your Ticket number is 10906">#10906</span>

                <div className='ticket-header'>
                    <img src={logo} id='ticket-logo' alt="Event logo" />
                    <p id='ticket-info'>Jan 31, 2025 / Austin, TX</p>
                </div>

                <div className='ticket-footer'>
                    {avatarUrl && (
                        <img
                            src={avatarUrl}
                            id='ticket-avatar'
                            alt="Your uploaded avatar"
                        />
                    )}
                    <div>
                        <p id='username' aria-label={`Your username is ${username}`}>{username}</p>
                        <div className='tf-info-area'>
                            <img src={githubImage} id='github-icon' alt="GitHub icon" />
                            <span id='github-username' aria-label={`Your github username is ${githubUsername}`}>@{githubUsername}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
