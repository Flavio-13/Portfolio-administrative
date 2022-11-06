import { CardMember } from '../../Components/Card-member/CardMember';
import './MemberTeam.css';
import Miarintsoa from '../../images/Miarintsoa.jpg';
import Dina from '../../images/Dina.jpg';
import Anjara from '../../images/Anjara.jpeg';
import Flavio from '../../images/Flavio2.jpg';
import Haja from '../../images/Haja.jpeg';

export const MemberTeam = () => {
    
    const members = [
        {
            picture: Flavio,
            nom: 'Flavio Ramanantsoa',
            spec: 'Développeur Fullstack Javascript'
        },
        {
            picture: Miarintsoa,
            nom: 'Miarintsoa Itokiana',
            spec: 'Développeur PHP back-end'
        },
        {
            picture: Dina,
            nom: 'Dina Rasamimanana',
            spec: 'Scrum master'
        },
        {
            picture: Anjara,
            nom: 'Miarintsoa Itokiana',
            spec: 'Product Owner'
        },
        {
            picture: Haja,
            nom: 'Haja Rajerison',
            spec: 'Graphic Designer'
        }
    ];

    return(
        <div className="member-team">
            <div className="list-member">
                <h1>Membres</h1>
                
                <div className="list">
                    {
                        members.map(
                            (member, index) => <CardMember member={member} key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}