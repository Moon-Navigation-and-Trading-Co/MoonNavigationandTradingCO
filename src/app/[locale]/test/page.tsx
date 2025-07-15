
"use client"
import OverviewServicesTabs from "@/components/overview-services";

function overview() {
    return <>Hi</>;
}
function services() {
    return <>Hello!</>;
}

export default function test() {
    return (
        <div className="mt-10">
            <OverviewServicesTabs renderOverview={overview} renderServices={services} />
        </div>
    );
}