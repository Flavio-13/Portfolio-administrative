import './CardMember.css';

export const CardMember = ({ member }) => {

    return(
        <div className="card-member">
            <div className="picture-member">
                <img src={member.picture} alt={member.nom} />
            </div>
            <div className="description-member">
                <span>{ member.nom }</span>
                <span className="spec">{ member.spec }</span>
            </div>
        </div>
    )
}