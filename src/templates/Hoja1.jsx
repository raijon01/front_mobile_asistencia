import React from 'react'
import useAuth from '../hooks/useAuth'
import { Text,View } from 'react-native'

export const Hoja1 = () => {
    const {compartido}=useAuth()
    if (compartido==false){
    return (
        <View>
            <Text>
                FALSO
            </Text>
            
        </View>
    )
    }
    if (compartido==true){
        return (
            <View>
                <Text>
                    Verdadero
                </Text>
                
            </View>
        )
        }
  
}
