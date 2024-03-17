import React from 'react'
import { Button } from '@/ui/button'

export const Home = () => {
  return (
    <main className="h-dvh bg-gray-50 grid place-items-center">
      <div className="space-y-10">
        <section className="space-x-4 flex">
          <Button as={'a'} href={'/test'}>
            内部 リンク
          </Button>
          <Button
            as={'a'}
            href={'https://www.example.com'}
            rel="noreferrer"
            target="_blank"
          >
            外部 リンク
          </Button>
          <Button>ボタン</Button>
        </section>
        <section className="space-x-4 flex">
          <Button
            as={'button'}
            onClick={() => (location.href = '/test')}
            intent={'secondary'}
          >
            内部 リンク
          </Button>
          <Button
            as={'a'}
            href={'https://www.example.com'}
            rel="noreferrer"
            target="_blank"
            intent={'secondary'}
          >
            外部 リンク
          </Button>
          <Button intent={'secondary'}>ボタン</Button>
        </section>
        <section className="space-x-4 flex">
          <Button
            as={'button'}
            onClick={() => (location.href = '/test')}
            intent={'ghost'}
          >
            内部 リンク
          </Button>
          <Button
            as={'a'}
            href={'https://www.example.com'}
            rel="noreferrer"
            target="_blank"
            intent={'ghost'}
          >
            外部 リンク
          </Button>
          <Button intent={'ghost'}>ボタン</Button>
        </section>
      </div>
    </main>
  )
}
