function Test(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    componentDidMount() {
        this.timerID =setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }
    render()  {
        return (
            <div>
                <h1>Hello,world!</h1>
                <Test date={this.state.date}/>
            </div>
        );
    }

} 
ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);
function f(x) {
    return x*x;
    
}

var arr = [1,2,3,4,5,6,7,8,9];
var result = arr.map(f);
function view() {
    document.getElementById("view").innerHTML = result;
}

