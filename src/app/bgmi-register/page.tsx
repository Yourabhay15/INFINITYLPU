'use client';

import TournamentRegistrationPage from '@/components/layout/tournament-registration-page';
import { User, Users } from 'lucide-react';

export default function BgmiRegisterPage() {
    const modes = [
        { id: 'solo', title: 'Solo', icon: <User size={36} />, description: 'Every player for themselves. Test your individual skills.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeiSdKzLghh8ffjCtdjJE73_YVt7kBvbywN8-cWvTOvnxrdGw/viewform?usp=dialog', detailsText: 'Our BGMI Solo Tournament is designed to test individual skill, strategy, and game sense.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹10,000' }, { label: 'Max Players', value: '100 players' } ], rules: ['Players must be at least 16 years old.', 'Use of any hacks will result in immediate disqualification.', 'Room ID and password will be shared 15 minutes before each match.'] },
        { id: 'duo', title: 'Duo', icon: <Users size={36} />, description: 'Team up with a friend and dominate the battlefield together.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeiSdKzLghh8ffjCtdjJE73_YVt7kBvbywN8-cWvTOvnxrdGw/viewform?usp=dialog', detailsText: 'Our BGMI Duo Tournament is perfect for teams of two who want to showcase their teamwork and coordination.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹10,000' }, { label: 'Max Teams', value: '50 teams' } ], rules: ['Teams must consist of exactly 2 players.', 'Substitutes are not allowed once the tournament begins.', 'Points are awarded for placement and eliminations.'] },
        { id: 'squad', title: 'Squad', icon: <Users size={36} className="w-10 h-10" />, description: 'Form a team of four players and compete for ultimate victory.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeiSdKzLghh8ffjCtdjJE73_YVt7kBvbywN8-cWvTOvnxrdGw/viewform?usp=dialog', detailsText: 'The BGMI Squad Tournament is the ultimate test of teamwork. Form a team of four and battle other squads.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹10,000' }, { label: 'Max Teams', value: '25 teams' } ], rules: ['Teams must consist of exactly 4 players.', 'One substitute player is allowed per team.', 'All players must join the Discord server for communication.'] }
    ];

    return (
        <TournamentRegistrationPage
            gameName="BGMI"
            modes={modes}
            pageTitle="BGMI Tournament - INFINITY"
            pageDescription="Register for the INFINITY BGMI Tournament. Choose from Solo, Duo, or Squad mode."
            breadcrumb="BGMI Tournament"
            headerAIDescription="battle royale game map"
        />
    );
}
