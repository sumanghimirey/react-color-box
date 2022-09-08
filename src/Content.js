
const Content = ({styleName}) => {
    return (
        <main>
            <div className="square" style={{backgroundColor:styleName}}>
                <p style={{color:'white'}}>
                    {styleName}

                </p>

            </div>
        </main>
    )

}

export default Content