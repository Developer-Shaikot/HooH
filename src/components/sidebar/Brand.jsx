import { Link } from "react-router-dom";

export default function Brand() {
	return (
		<Link to="/">
			<img className="h-6 xs:h-auto" src="/images/damex-logo.svg" alt="damex" />
		</Link>
	);
}
