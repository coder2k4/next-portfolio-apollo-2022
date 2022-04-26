const PortfolioDetail = ({ query }) => {

    const { id } = query

    return (
        <div>
            This page ID : {id}
        </div>
    );
}

PortfolioDetail.getInitialProps = ({ query }) => {
    return ({ query })
}


export default PortfolioDetail;