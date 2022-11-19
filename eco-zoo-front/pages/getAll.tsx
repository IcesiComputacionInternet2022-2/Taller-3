import Layout from "../components/layout";

export default function GetAll({capybaras}: { capybaras: any[] }) {

    if (capybaras.length === 0) return (
        <div className="w-full min-h-screen flex pb-16">
            <h1 className="m-auto text-5xl font-bold">No data found</h1>
        </div>)

    return (
        <div className="overflow-x-auto min-h-screen pb-16 bg-base-200">
            <table className="table-compact table-zebra w-full">
                <thead>
                <tr>
                    <th></th>
                    {Object.keys(capybaras[0]).map((key, index) => {
                        return (
                            <th className="uppercase" key={index}>{key}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {capybaras.map((capybara, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {Object.keys(capybara).map((key, index) => {
                                return (
                                    <td key={index}>{capybara[key]?capybara[key]:"N/A"}</td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch('http://localhost:8080/capybaras')
    const capybaras = await res.json()

    return {
        props: {
            capybaras,
        },
    }
}

GetAll.getLayout = function getLayout(page: any) {
    return (<Layout>
        {page}
    </Layout>)
}