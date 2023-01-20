import axios from 'axios'
import { BE_URL } from '../constants'

export const getData = async (path) => (await axios.get(`${BE_URL}/${path}`)).data
export const getWidgets = () => getData('widgets')
export const getRobotTypes = () => getData('robot_types')
export const getRobotSettings = () => getData('robot_settings')
