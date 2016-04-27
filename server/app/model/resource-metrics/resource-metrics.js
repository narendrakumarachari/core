/*
 Copyright [2016] [Relevance Lab]

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var mongoose = require('mongoose');
var logger = require('_pr/logger')(module);
var Schema = mongoose.Schema;

var ResourceMetricsSchema = new Schema({
    providerId: {
        type: String,
        required: false,
        trim: true
    },
    providerType: {
        type: String,
        required: false,
        trim: true
    },
    orgId: {
        type: String,
        required: false,
        trim: true
    },
    projectId: {
        type: String,
        required: false,
        trim: true
    },
    resourceType: {
        type: String,
        required: false,
        trim: true
    },
    platform: {
        type: String,
        required: false,
        trim: true
    },
    platformId: {
        type: String,
        required: false,
        trim: true
    },
    instanceId: {
        type: String,
        required: false,
        trim: true
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: String,
        required: false,
        trim: true
    },
    usageMetrics: Schema.Types.Mixed
});

var ResourceMetrics = mongoose.model('ResourceMetrics', ResourceMetricsSchema);
module.exports = ResourceMetrics;