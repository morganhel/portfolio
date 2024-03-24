function Skill ({logo,name}){
    <div className="skill">
        <div className="skillInner">
            <div className="skillInner__logo">
                <img className="skillInner__logo--img" src={logo} alt={name} />
            </div>
            <div className="skillInner__name">
                <p>{name}</p>
            </div>
        </div>
    </div>
}

export default Skill