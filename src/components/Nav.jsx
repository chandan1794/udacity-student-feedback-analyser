import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<div className="nav">
			<NavLink to="/">
				<svg
					id="logo"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 40 40"
					width="2500"
					height="2500"
				>
					<g id="_x38_0-mark-white">
						<path
							id="mark_28_"
							className="st0"
							d="M13.3 0L0 7.7v17.6C0 33.4 6.5 40 14.6 40c2.7 0 5.2-.7 7.4-1.9l10.8-6.2C37.1 29.6 40 25.2 40 20V1.6L37.4.1 26 6.2v19.2c0 .8-.1 1.6-.2 2.4-.2.8-.4 1.5-.7 2.2l-.3.6c-.4 0-2.9-.9-4.2-1.8-.6-.4-1.1-.8-1.6-1.3s-.9-1-1.3-1.6c-.4-.6-.7-1.2-1-1.8-.3-.6-.5-1.3-.6-2-.1-.7-.1-1.4-.1-2.1V1.6L13.3 0zm6.5 36.2c-.7.3-1.7.7-2.5.9-.8.2-1.5.2-2.3.2-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.4-2.2-.7-.7-.3-1.4-.7-2-1.1C6.6 34.1 5.7 33.1 5 32c-.4-.6-.8-1.3-1.1-2-.3-.7-.5-1.5-.7-2.3-.2-.8-.2-1.6-.2-2.4V9.2l10-6.1V20c0 6.4 4.7 11.8 10.7 13.1-.2.3-.4.6-.7.8-1.1 1.1-2 1.8-3.2 2.3zm17-14c-.1.7-.4 1.4-.6 2-.3.6-.6 1.2-1 1.8-.4.6-1.6 2.1-3.2 3-1.6.9-3.1 1.2-4 1.4.6-1.6 1-3.2 1-5V7.7l8-4.6V20c0 .8 0 1.5-.2 2.2z"
						/>
					</g>
				</svg>
			</NavLink>
			<NavLink to="/">
				<p className="websiteName"> Feedback analyzer</p>
			</NavLink>
			<div className="spacer" />
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/about">
				About
			</NavLink>
			<a
				href="https://github.com/iShubhamPrakash/udacity-student-feedback-analyser"
				target="_blank"
				rel="noopener noreferrer"
				title="Visit GitHub repository"
			>
				<img
					src="./GitHub-Mark-64px.png"
					alt="Github page"
					className="githubLink"
				/>
			</a>
		</div>
	);
};
