import React from 'react';
import getStringClassNameOfObject from '../../utils/getStringClassNameOfObject';

function AuthBar(props) {
	return <div className="signin-container">
		<ul className="signin__switcher" onClick={props.switchBlock}>
			{Object.keys(props.blockLinks).map((link, i) => {
				const blockLink = props.blockLinks[link];
				return <li key={i}
					data-block={link}
					className={getStringClassNameOfObject({ active: blockLink.isActive })}>
					{blockLink.title}
				</li>
			})}
		</ul>
		<div className="signin__selected-block">
			{props.activeBlockComponent && <props.activeBlockComponent {...props} />}
		</div>
	</div>
}

export default AuthBar;