import PropTypes from "prop-types";

export default function OptionedTd({ data }) {
    return (
        <div className="flex items-center justify-center">
            <img src={data.src} alt="" />
        </div>
    );
}

OptionedTd.propTypes = {
    data: PropTypes.object,
};
