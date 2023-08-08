import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <div>
        {
            screen.width > 900 ? (
                <AnimatedCursor
                innerSize={20}
                outerSize={20}
                color='255, 255, 255'
                innerScale={0.5}
                outerAlpha={0.5}
                outerScale={2.3}
                trailingSpeed={1}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
                innerStyle={{
                    mixBlendMode: "exclusion",
                }}
                outerStyle={{
                    mixBlendMode: 'extenction',
                    outline: "2px dashed goldenrod"
                }}
                />
            ) : ""
        }

    </div>
  )
}

export default Cursor