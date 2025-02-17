/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

export const OBJECT_TYPES = {
    EVENTS_OBJECT_TYPE: 'yamcs.events',
    TELEMETRY_OBJECT_TYPE: 'yamcs.telemetry',
    IMAGE_OBJECT_TYPE: 'yamcs.image',
    STRING_OBJECT_TYPE: 'yamcs.string',
    AGGREGATE_TELEMETRY_TYPE: 'yamcs.aggregate',
    OPERATOR_STATUS_TYPE: 'yamcs.operatorStatus',
    POLL_QUESTION_TYPE: 'yamcs.pollQuestion'
};

export const DATA_TYPES = {
    DATA_TYPE_EVENTS: 'events',
    DATA_TYPE_TELEMETRY: 'parameters',
    DATA_TYPE_REPLY: 'reply'
};

export const METADATA_TIME_KEY = 'generationTime';

export const UNSUPPORTED_TYPE = 'Unsupported Data Type';
export const AGGREGATE_TYPE = 'AGGREGATE';
