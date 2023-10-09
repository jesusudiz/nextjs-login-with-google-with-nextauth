import Link from 'next/link';

function DashboardPage (){
    return (
        <nav>
           <h1>NextGoogle</h1>
           <div>
            <Link href="/dashboard">
            Dashboard
            </Link>
           </div>
        </nav>
    )
};

export default DashboardPage