'use client';

import TournamentRegistrationPage from '@/components/layout/tournament-registration-page';
import { User, Users } from 'lucide-react';

export default function FreefireRegisterPage() {
    const modes = [
        { id: 'solo', title: 'Solo', icon: <User size={36} />, description: 'Every player for themselves. Test your individual skills.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Solo Tournament is designed to test individual skill, strategy, and game sense. Players will compete across multiple rounds to earn points based on placement and eliminations.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Players', value: '48 players' } ], rules: ['Players must be at least 16 years old to participate.', 'All participants must have a valid FreeFire account with a minimum level of 25.', 'Players must join the tournament Discord server for communication and updates.', 'Room ID and password will be shared 15 minutes before each match.', 'Use of any hacks, mods, or unauthorized third-party applications will result in immediate disqualification.'] },
        { id: 'duo', title: 'Duo', icon: <Users size={36} />, description: 'Team up with a friend and dominate the battlefield together.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Duo Tournament is perfect for teams of two players who want to showcase their teamwork and coordination. Teams will compete across multiple rounds to earn points.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Teams', value: '24 teams' } ], rules: ['Teams must consist of exactly 2 players.', 'Substitutes are not allowed once the tournament begins.', 'Team must check in 30 minutes before their scheduled match time.', 'Points System: Placement points (20 for 1st) + 1 point per elimination.'] },
        { id: 'squad', title: 'Squad', icon: <Users size={36} className="w-10 h-10" />, description: 'Form a team of four players and compete for ultimate victory.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Squad Tournament is the ultimate test of teamwork. Form a team of four players and battle against other squads across multiple rounds.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Teams', value: '12 teams' } ], rules: ['Teams must consist of exactly 4 players.', 'Teams are allowed to register 1 substitute player.', 'Tournament admins have the final say in all disputes and rule interpretations.'] }
    ];

    return (
        <TournamentRegistrationPage
            gameName="FreeFire MAX"
            modes={modes}
            pageTitle="FreeFire MAX Tournament - INFINITY"
            pageDescription="Register for the INFINITY FreeFire MAX Tournament. Choose from Solo, Duo, or Squad mode."
            breadcrumb="FreeFire MAX Tournament"
            headerAIDescription="futuristic battlefield"
        />
    );
}
