/// <reference types="node" />
import { useLanguage } from "@/components/language-provider"
import type strictAssert from "node:assert/strict"
import { Component, type ReactNode } from "react"

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? <ErrorPage status={500} /> : this.props.children
  }
}

export function ErrorPage({ status }: { status: number }) {
  const { t } = useLanguage()
  const message =
    status === 404
      ? t(
          "Page not found. Please check the URL.",
          "ページが見つかりません。URLを確認してください。"
        )
      : status >= 500
        ? t(
            "An error occurred. Please try again later.",
            "エラーが発生しました。時間をおいて再度お試しください。"
          )
        : t(
            "The request could not be processed.",
            "リクエストを処理できませんでした。"
          )

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <title>{`Project Automata | ${status}`}</title>
      <h1 className="text-5xl font-semibold">{status}</h1>
      <p role="alert">{message}</p>
      <a href="/" className="underline underline-offset-4">
        {t("Back to home", "トップページへ戻る")}
      </a>
    </main>
  )
}

if (import.meta.env.MODE === "test") {
  // Node専用のテスト依存をブラウザへ読み込まないため、ここでインポートする。
  const assert: typeof strictAssert = (await import("node:assert/strict"))
    .default
  const { test } = await import("node:test")
  const { renderToStaticMarkup } = await import("react-dom/server")

  for (const [status, message] of [
    [404, "Page not found"],
    [500, "Please try again later"],
    [503, "Please try again later"],
    [403, "The request could not be processed"],
  ] as const) {
    test(`ErrorPage displays ${status} with safe recovery guidance`, () => {
      const html = renderToStaticMarkup(<ErrorPage status={status} />)
      assert.match(html, new RegExp(`>${status}</h1>`))
      assert.equal(html.includes(message), true)
      assert.match(html, /href="\/"/)
    })
  }
}
