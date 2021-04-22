import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Data } from '../../interfaces/Data';
import { CardContent } from '../CardContent';
import { Content } from '../Content';
import { Home } from '../Home';
import { Container } from '../Layouts';
import { SkillStack } from '../SkillStack';

interface DetailsProps {
    record: Data;
}
export const Details = ({ record }: DetailsProps) => {
    return (
        <Container fullWidth className="p-0">
            <Switch>
                <Route exact path="/">
                    <Home record={record} />
                    <SkillStack {...record.skillStack} />
                    <CardContent {...record.education} />
                    <CardContent {...record.career} />
                    <CardContent {...record.project} />
                    <CardContent {...record.portfolio} />
                </Route>
                <Route exact path="/introduction">
                    <Home record={record} />
                </Route>

                <Route exact path="/skill">
                    <SkillStack {...record.skillStack} />
                </Route>

                <Route exact path="/education">
                    <CardContent {...record.education} />
                </Route>

                <Route exact path="/work">
                    <CardContent {...record.career} />
                </Route>

                <Route exact path="/project">
                    <CardContent {...record.project} />
                </Route>

                <Route exact path="/portfolio">
                    <CardContent {...record.portfolio} />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </Container>
    );
};
