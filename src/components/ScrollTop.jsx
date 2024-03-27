import { useEffect, Fragment } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

const ScrollToTop = ({ props, children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <Fragment {...props}>{children}</Fragment>;
};

ScrollToTop.propTypes = {
    props: PropTypes.object,
    children: PropTypes.element,
};

export default ScrollToTop;
