import {Child} from './child'

const Parent = () => {
    return <Child color="Red" onClick={()=> console.log('Clicked')}/>
}

export default Parent