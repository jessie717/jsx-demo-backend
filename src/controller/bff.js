import axios from 'axios'
// 表格数据
const queryIndicatorData = async (id, version, type) => {
  return await axios.get(
    `http://192.168.110.164:8001/api/v1/fetalbrain_detection/image_processing/series/${id}/${version}/number_value`,
    {
      params: {
        type
      }
    }
  )
}
// 原始dicom
const queryOriginDicom = async (id, version) => {
  return await axios.get(
    `http://192.168.110.164:8001/api/v1/fetalbrain_detection/image_processing/series/${id}/${version}/image/ori_dicom`
  )
}
// 切片
const querySlices = async (id, version) => {
  return await axios.get(
    `http://192.168.110.164:8001/api/v1/fetalbrain_detection/image_processing/series/${id}/${version}/image/two_dimensional`
  )
}
//
const queryPatient = async () => {
  return await axios.get(
    `http://192.168.110.237:8000/api/v1/fetalbrain_detection/cases/task_list`,
    {
      params: {
        page: 1,
        size: 10,
        sort_time: 'create_time',
        sort_type: 'descending',
        algo_step: '2d'
      },
      headers: {
        Authorization: process.env.APP_TOKEN
      }
    }
  )
}
const queryData = async (ctx, next) => {
  const { id, version, type } = ctx.request.query
  try {
    // console.log('id, version, type --->', id, version, type)
    // const indicatorData = await queryIndicatorData(id, version, type)
    // console.log('indicatorData', indicatorData.data)
    // const slices = await querySlices(id, version)
    // console.log('slices ===>', slices)
    // const originDicom = await queryOriginDicom(id, version)
    const patient = await queryPatient()
    console.log('patient', patient.data)
    ctx.body = {
      code: 200,
      msg: patient.data.msg,
      data: patient.data.data
    }
  } catch (error) {
    console.log('error', error)
    ctx.body = {
      code: error.code,
      message: error.msg
    }
  }
}

// const queryData = async (id, version, type) => {
//   const res = await axios.get(
//     `http://192.168.110.237:8001/api/v1/fetalbrain_detection/image_processing/series/${id}/${version}/number_value`,
//     {
//       params: {
//         type
//       }
//     }
//   )
//   console.log('res', res)
// }

export { queryData }
