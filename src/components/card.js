import React,{useEffect} from 'react'
import axios from 'axios'
import {setInfo} from '../action/myInfo'
import { connect } from 'react-redux'

const Card = ({info,addInfo}) => {

    const fetchInfo = async() => {
        const response = await axios.get(`http://portfolio-dipta.herokuapp.com/api/projects`).catch(err=>console.log(err))
        const infoo = response.data
        addInfo(infoo)
    }

    useEffect(()=>{
        fetchInfo()
    },[])

    return (
        <div>
            <h1>Info</h1>
            {
                info.length ? (
                    info.map(inf => (
                        <>
                            <h1 key={inf._id}>{inf.title}</h1>
                            {console.log(info)}
                        </>
                    ))
                ) : ('No Data')
            }
        </div>
    )
}

const mapStateToProps = state => ({
    info: state
})

const mapDispatchToProps = dispatch =>({
    addInfo: info => {
        dispatch(setInfo(info))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Card)