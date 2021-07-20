import React from "react";
import ReactDOM from "react-dom";
import { MiniGraph, MiniGraphVerticalBars, MiniGraphLines, MiniGraphNormalBand, MiniGraphAverage } from "../src";

export type AppProps = {};

export type AppComponent = React.FunctionComponent<AppProps>;

const graphStyles = { width: "200px", height: "60px", border: "1px dotted red", margin: "0.5em", padding: "0.5em" };
const data = (length: number, max: number): number[] =>
    Array(length)
        .fill(null)
        .map(() => Math.round(Math.random() * max));

const App: AppComponent = ({}): JSX.Element => {
    return (
        <div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphVerticalBars />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphVerticalBars margin={1} />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines fill={false} />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines curved={true} fill={false} />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines curved={true} />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines fill={false} />
                    <MiniGraphNormalBand />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphLines fill={false} />
                    <MiniGraphAverage />
                </MiniGraph>
            </div>
            <div style={graphStyles}>
                <MiniGraph data={data(20, 100)}>
                    <MiniGraphVerticalBars color="lightgrey" />
                    <MiniGraphLines fill={false} />
                    <MiniGraphNormalBand />
                    <MiniGraphAverage />
                </MiniGraph>
            </div>
            <div style={{ ...graphStyles, width: 800, height: 20 }}>
                <MiniGraph data={data(200, 100)}>
                    <MiniGraphVerticalBars />
                </MiniGraph>
            </div>
            <div style={{ ...graphStyles, width: 500, height: 100 }}>
                <MiniGraph data={data(50, 100)}>
                    <MiniGraphVerticalBars />
                    <MiniGraphAverage />
                </MiniGraph>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
