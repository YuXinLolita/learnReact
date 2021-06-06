function Test(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component {
constructor(props){
        super(props);
        this.state ={date: new Date()};

    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.Tast1(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    Test1(){
        this.setState ({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <Test date = {this.state.date}/>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);