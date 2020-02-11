import React, {Component} from 'react';


class SkillLi extends Component {
    render() { {/* création d'un composant pour les skill*/}

        const skill = this.props.skill;{/* les propriétés de skill*/}

        return (
            <div>
                {skill.name}
            </div>
        );
    }
}

export default SkillLi;