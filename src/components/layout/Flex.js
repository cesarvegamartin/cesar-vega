import React from "react"
import PropTypes from "prop-types"

const Flex = props => {
  const { children, className, style, ...customStyle } = props

  return (
    <div
      className={className}
      style={{
        display: "flex",
        ...style,
        ...customStyle,
        // justifyContent: props.justifyContent || "flex-start",
        // flexDirection: props.flexDirection || "row",
        // flexGrow: props.flexGrow || 0,
        // flexBasis: props.flexBasis || "auto",
        // flexShrink: props.flexShrink || 1,
        // flexWrap: props.flexWrap || "nowrap",
        // flex: props.flex || "0 1 auto",
        // alignItems: props.alignItems || "stretch",
        // margin: props.margin || "0",
        // padding: props.padding || "0",
        // width: props.width || "auto",
        // height: props.height || "auto",
        // maxWidth: props.maxWidth || "none",
      }}
    >
      {children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Flex.defaultProps = {
  children: undefined,
  className: "",
}

export default Flex
