import React, { useState, useEffect } from "react";

export default function Alerts(props) {
	return (
		<div
			className={`corner-popup ${props.trigger ? "" : "hidden"} ${props.type}`}>
			<span className="message">{props.message}</span>
		</div>
	);
}
