
import { PageFooter } from '../Components/PageFooter';
import { PageHead } from '../Components/PageHead';
import { PageHeader } from '../Components/PageHeader';
import { PageMain } from '../Components/PageMain';
import { PageNav } from '../Components/PageNav';

function HomePage() {
    return (
        <div className="page">
            <PageHead />
            <PageNav />
            <PageHeader />
            <PageMain />
            <PageFooter />
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </div>
    );
}

export default HomePage;