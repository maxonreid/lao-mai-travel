'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import styles from './ImageWithSkeleton.module.css'

type ImageWithSkeletonProps = ImageProps & {
  skeletonClassName?: string
}

export default function ImageWithSkeleton({ 
  skeletonClassName,
  className,
  onLoad,
  ...props 
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={`${styles.skeleton} ${skeletonClassName || ''}`} />
      )}
      <Image
        {...props}
        className={`${className} ${isLoading ? styles.imageLoading : styles.imageLoaded}`}
        onLoad={(e) => {
          setIsLoading(false)
          onLoad?.(e)
        }}
      />
    </div>
  )
}
