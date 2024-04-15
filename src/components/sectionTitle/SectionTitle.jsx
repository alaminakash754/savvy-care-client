
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto my-6">
            <p className="italic text-blue-600 mb-2 font-bold">--{subHeading}--</p>
            <h2 className="uppercase text-xl border-y-4 border-y-blue-400 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;