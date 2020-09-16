// @flow
import * as React from "react";
import Frame from "./components/Frame";

const URL_REGEX = new RegExp("^https?://docs.google.com/spreadsheets/d/(.*)$");

type Props = {|
  attrs: {|
    href: string,
    matches: string[],
  |},
|};

export default class GoogleSlides extends React.Component<Props> {
  static ENABLED = [URL_REGEX];

  render() {
    return (
      <Frame
        src={this.props.attrs.href.replace("/edit", "/preview")}
        icon={
          <img
            src="/images/google-sheets.png"
            alt="Google Sheets Icon"
            width={16}
            height={16}
          />
        }
        canonicalUrl={this.props.attrs.href}
        title="Google Sheets"
        border
      />
    );
  }
}
