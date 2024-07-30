import Thankyou from "./Thankyou";

function App() {
    console.log("testing ide")
    const errorMapper = {
        emptyClass: 'You must select a class to run this report.',
        emptyAssessmentType: 'You must select a assessment type to run this report.',
        emptyModule: 'You must select a module to run this report.',
        emptyReportType: 'You must select a Report Type to run this report.',
        emptyReport: 'You must select a Report to run this report.',
    };

    console.log(Object.keys(errorMapper).map((item: string) => item))

    return (
        <>
            <Thankyou/>
            <h1>Build Reactjs W đâ eb


            </h1>

            <p>This is a simple ReactJS app.</p>
            <p>I building successfully about jenkins with docker, docker-compose</p>
        </>
    );
}

export default App;
