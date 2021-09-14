import { Service, Context, ServiceBroker } from 'moleculer';
import { Inject, Injectable } from '@nestjs/common';
import { AppService } from "./app.service";
import { InjectBroker } from 'nestjs-moleculer';
import { handleRetry } from 'nestjs-moleculer/dist/common/moleculer.utils';

@Injectable()
export class MoleculerService extends Service {
    constructor(@InjectBroker() broker: ServiceBroker,
                @Inject(AppService) private readonly appService: AppService
    ) {
        super(broker);

        this.parseServiceSchema({
            name: "home",
            settings: {
                upperCase: true
            },
            actions: {
                addUser: {
                    params: {
                        username: "string",
                        email: "string",
                        age: "number"
                    },
                    async handler(ctx) {
                        let res = await broker.call('saveData.addUser', ctx.params);
                        return res
                    }
                },
                findUser: {
                    params: {
                        username: "string"
                    },
                    async handler(ctx) {
                        let res = await broker.call('saveData.findUser', ctx.params)
                        return res;
                    }
                },
                updateUser: {
                    params: {
                        username: "string",
                        newUsername: "string",
                        newEmail: "string",
                        newAge: "number"
                    },
                    async handler(ctx) {
                        let res = await broker.call('saveData.updateUser', ctx.params)
                        return res
                    }
                },
                deleteUser: {
                    params: {
                        username: "string"
                    },
                    async handler(ctx) {
                        let res = await broker.call('saveData.deleteUser', ctx.params)
                        return res
                    }
                }
            },
            created: this.serviceCreated,
            started: this.serviceStarted,
            stopped: this.serviceStopped,
        });
    }

    serviceCreated() {
        this.logger.info("home service created.");
    }

    async serviceStarted() {
        this.logger.info("home service started.");
    }

    async serviceStopped() {
        this.logger.info("home service stopped.");
    }

    async sayHello(ctx: { params: { name: any; }; }) {
        return 'hello from moleculer service';
    }
}