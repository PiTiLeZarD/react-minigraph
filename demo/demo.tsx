import React from "react";
import ReactDOM from "react-dom";
import { MiniGraph, MiniGraphVerticalBars, MiniGraphLines, MiniGraphNormalBand, MiniGraphAverage } from "../src";
import { Grid, Paper, TextField, InputAdornment, Switch, FormControlLabel, Tabs, Tab } from "@material-ui/core";
export type AppProps = {};

export type AppComponent = React.FunctionComponent<AppProps>;

export type AppConfig = {
    width: number;
    height: number;
    count: number;
    amplitude: number;
    normalBand: boolean;
    average: boolean;
    filled: boolean;
    steps: boolean;
    smooth: boolean;
};

const data = (length: number, max: number): number[] =>
    Array(length)
        .fill(null)
        .map(() => Math.round(Math.random() * max));

const App: AppComponent = ({}): JSX.Element => {
    const [currentTab, setCurrentTab] = React.useState<number>(0);
    const [config, setConfig] = React.useState<AppConfig>({
        width: 200,
        height: 60,
        count: 20,
        amplitude: 100,
        normalBand: false,
        average: false,
        filled: false,
        steps: false,
        smooth: false,
    });
    const graphStyles = {
        width: `${config.width}px`,
        height: `${config.height}px`,
        border: "1px dotted red",
        margin: "2em auto",
        padding: "0.5em",
    };

    const handleTabChange = (_: any, newValue: number) => setCurrentTab(newValue);

    return (
        <React.Fragment>
            <div style={{ textAlign: "center" }}>
                <div style={graphStyles}>
                    <MiniGraph data={data(config.count, config.amplitude)}>
                        {currentTab == 0 && <MiniGraphVerticalBars filled={config.filled} />}
                        {currentTab == 1 && (
                            <MiniGraphLines
                                mode={config.smooth ? "bezier" : config.steps ? "steps" : undefined}
                                filled={config.filled}
                            />
                        )}
                        {config.normalBand && <MiniGraphNormalBand />}
                        {config.average && <MiniGraphAverage />}
                    </MiniGraph>
                </div>
            </div>
            <Grid container spacing={8}>
                <Grid xs={3} item style={{ textAlign: "center" }}>
                    <TextField
                        label="Surrounding width"
                        value={config.width}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">px</InputAdornment>,
                        }}
                        onChange={(ev: React.SyntheticEvent) =>
                            setConfig({ ...config, width: parseInt((ev.target as HTMLInputElement).value) || 60 })
                        }
                    />
                </Grid>
                <Grid xs={3} item style={{ textAlign: "center" }}>
                    <TextField
                        label="Surrounding height"
                        value={config.height}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">px</InputAdornment>,
                        }}
                        onChange={(ev: React.SyntheticEvent) =>
                            setConfig({ ...config, height: parseInt((ev.target as HTMLInputElement).value) || 60 })
                        }
                    />
                </Grid>
                <Grid xs={3} item style={{ textAlign: "center" }}>
                    <TextField
                        label="Data Count"
                        value={config.count}
                        onChange={(ev: React.SyntheticEvent) =>
                            setConfig({ ...config, count: parseInt((ev.target as HTMLInputElement).value) || 20 })
                        }
                    />
                </Grid>
                <Grid xs={3} item style={{ textAlign: "center" }}>
                    <TextField
                        label="Data Amplitude"
                        value={config.amplitude}
                        onChange={(ev: React.SyntheticEvent) =>
                            setConfig({
                                ...config,
                                amplitude: parseInt((ev.target as HTMLInputElement).value) || 100,
                            })
                        }
                    />
                </Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={config.filled}
                                onChange={(ev: React.SyntheticEvent) =>
                                    setConfig({
                                        ...config,
                                        filled: (ev.target as HTMLInputElement).checked,
                                    })
                                }
                                name="filled"
                            />
                        }
                        label="Filled"
                    />
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={config.normalBand}
                                onChange={(ev: React.SyntheticEvent) =>
                                    setConfig({
                                        ...config,
                                        normalBand: (ev.target as HTMLInputElement).checked,
                                    })
                                }
                                name="normalBand"
                            />
                        }
                        label="Normal Band"
                    />
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={config.average}
                                onChange={(ev: React.SyntheticEvent) =>
                                    setConfig({
                                        ...config,
                                        average: (ev.target as HTMLInputElement).checked,
                                    })
                                }
                                name="average"
                            />
                        }
                        label="Average"
                    />
                </Grid>
            </Grid>
            <Tabs indicatorColor="primary" textColor="primary" onChange={handleTabChange} value={currentTab}>
                <Tab label="VerticalBars" />
                <Tab label="Line" />
            </Tabs>
            {currentTab == 0 && (
                <Paper elevation={4} style={{ padding: "2em" }}>
                    No specific config for VerticalBars
                </Paper>
            )}
            {currentTab == 1 && (
                <Paper elevation={4} style={{ padding: "2em" }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={config.smooth}
                                onChange={(ev: React.SyntheticEvent) =>
                                    setConfig({
                                        ...config,
                                        smooth: (ev.target as HTMLInputElement).checked,
                                    })
                                }
                                name="smooth"
                            />
                        }
                        label="Smooth"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={config.steps}
                                onChange={(ev: React.SyntheticEvent) =>
                                    setConfig({
                                        ...config,
                                        steps: (ev.target as HTMLInputElement).checked,
                                    })
                                }
                                name="steps"
                            />
                        }
                        label="Steps"
                    />
                </Paper>
            )}
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
