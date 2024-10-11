
const Spinner: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#5F8D8D]"></div>
            <h1 className="text-lg font-sm text-[#003D25]">Please Wait..</h1>
        </div>
    );
};

export default Spinner;