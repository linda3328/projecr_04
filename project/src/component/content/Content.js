import React from 'react'
export class Content extends React.Component{

    //생성자 함수 constructor
constructor(props){
    super(props)
    this.state = {
        count:0,
    }
    this.resetCount = this.resetCount.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);

}
//아래 this는 윈도우 에서 호출하기 때문에 bind로 불러와서 적용시킴
increaseCount(){
    // this.state.count+=1;
    const current = this.state.count;
    this.setState({
        count: current+1
    })
    console.log(this.state);
    //this.state.count = this.state.count +1;

}
decreaseCount(){
    // this.state.count-=1;
    const current = this.state.count;
    this.setState({
        count: current-1
    })
    console.log(this.state);
    //this.state.count = this.state.count -1;
}
resetCount(){
    // this.state.count-=1;
    const current = this.state.count;
    this.setState({
        count: 0
    })
    console.log(this.state);
    //this.state.count = this.state.count -1;
}




    render(){
        const {count} = this.state;
        return(
        <div>
            <h1>{count}</h1>
            <button onClick={this.decreaseCount}>Down</button>
            <button onClick={this.increaseCount}>Up</button>
            <button onClick={this.resetCount}>Reset</button>
        </div>
        
        
        )
    }
}