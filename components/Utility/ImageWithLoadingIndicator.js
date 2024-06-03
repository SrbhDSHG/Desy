import { useState } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'

const ImageWithLoadingIndicator = ({ source, style }) => {
  const [loading, setLoading] = useState(true)

  return (
    <View style={style}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#03A4FF"
          //   style={styles.activityIndicator}
        />
      )}
      <Image
        source={source}
        style={style}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </View>
  )
}

export default ImageWithLoadingIndicator
