import React from 'react'
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'

// デフォルトを削除することにより、要素に応じて動的に型を取得する。
type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element
  }

// スタイルを追加
const button = cva(['font-medium', 'py-2.5', 'px-3.5', 'rounded-md'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white'],
      secondary: ['bg-black', 'text-white'],
      ghost: ['text-blue-500'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})

// バリアント...異なるデータ型を単一の型として扱うことができるデータ構造
// Class Variance Authority (CVA)を利用してバリアントを取得する方法
type Props = VariantProps<typeof button>

// asが指定されていない場合のデフォルト要素を定義する
const defaultElement = 'button'

// 適切に型付けされ、スタイリッシュにデザインされたButtonコンポーネント
export const Button = <
  Element extends React.ElementType = typeof defaultElement
>(
  props: PolymorphicProps<Element, Props>
) => {
  const { as: Component = defaultElement, className, intent, ...rest } = props
  return (
    <Component className={twMerge(button({ className, intent }))} {...rest} />
  )
}
