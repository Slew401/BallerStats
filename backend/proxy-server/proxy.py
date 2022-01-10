## CORE FLASK IMPORTS
from flask import Flask
from flask_cors import CORS 
from flask import request
from pandas import DataFrame

import json

## SWAR NBA_API IMPORTS
from nba_api.stats.endpoints import teaminfocommon
from nba_api.stats.endpoints import commonplayerinfo
from nba_api.stats.endpoints import commonteamroster
from nba_api.stats.endpoints import commonallplayers
from nba_api.stats.endpoints import playerprofilev2
from nba_api.stats.endpoints import shotchartdetail
from nba_api.stats.endpoints import boxscoreadvancedv2
from nba_api.stats.endpoints import playbyplayv2
from nba_api.stats.endpoints import teamgamelog
from nba_api.stats.endpoints import playergamelog
from nba_api.stats.endpoints import leaguedashteamstats
from nba_api.stats.static import players

## FLASK RUN FUNCTIONS
app = Flask(__name__)
CORS(app) ## Allows bypass of CORS issues with

## Flask Localhost greeting
@app.route("/")
def hello():
    return "Hello Baby"

## API CALLING FUNCTIONS 
@app.route("/api/getPlayerInfo" , methods=['GET'])
def getPlayerInfo():
    p_id = request.args.get('player_id')
    preRes = commonplayerinfo.CommonPlayerInfo(player_id=p_id); 
    res = preRes.get_normalized_json()
    return res

@app.route("/api/getAllPlayers", methods=['GET'])
def getAllPlayers():
    preResponse = commonallplayers.CommonAllPlayers()
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/getPlayerSeasons", methods = ["GET"])
def getPlayerSeasons():
    p_id = request.args.get('player_id')
    preResponse = playerprofilev2.PlayerProfileV2(player_id=p_id, per_mode36="PerGame")
    res = preResponse.get_normalized_json(); 
    return res

@app.route("/api/shotChart", methods=["GET"])
def shotChart():
    preResponse = shotchartdetail.ShotChartDetail(team_id=0 ,player_id=2544, game_id_nullable="0022100002", context_measure_simple='FGA')
    res = preResponse.get_normalized_json()
    return res 

@app.route("/api/boxscore", methods=["GET"])
def boxScore():
    preResponse = boxscoreadvancedv2.BoxScoreAdvancedV2(game_id ="0022100133" )
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/pbp", methods=['GET'])
def pb(): 
    preResponse = playbyplayv2.PlayByPlayV2(game_id ="0022100002")
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/playerGamelogs", methods=['GET'])
def playerGameLogs():
    p_id = request.args.get('player_id')
    preResponse = playergamelog.PlayerGameLog(player_id=p_id)
    res = preResponse.get_normalized_json()
    return res


@app.route("/api/playerGamelogsAdv", methods=['GET'])
def playerGamelogsAdv():
    p_id = request.args.get('player_id')
    preResponse = playergamelogs.PlayerGameLogs(player_id_nullable=p_id, season_nullable="2021-22",measure_type_player_game_logs_nullable="Advanced")
    res = preResponse.get_normalized_json()
    return res


@app.route("/api/playerSearch", methods=['GET'])
def playerSearch():
    name = request.args.get('name')
    preRes = players.find_players_by_full_name(regex_pattern=name)
    res = json.dumps(preRes)
    return res

@app.route("/api/idSearch", methods=['GET'])
def idSearch():
    id = request.args.get('id')
    preRes = players.find_players_by_id(regex_pattern=id)
    res = json.dumps(preRes)
    return res

## TEAM APIs

# @app.route("/api/teamInfo", methods=['GET'])
# def teamInfo():
    

@app.route("/api/getTeamRoster", methods=['GET'])
def getTeamRoster():
    t_id = request.args.get('team_id')
    preResponse = commonteamroster.CommonTeamRoster(team_id=t_id)
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/getTeamBasicInfo", methods=['GET'])
def getTeamBasicInfo():
    t_id = request.args.get('team_id')
    preResponse = teaminfocommon.TeamInfoCommon(team_id=t_id)
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/teamGamelogs", methods=['GET'])
def teamGameLogs():
    t_id = request.args.get('team_id')
    preResponse = teamgamelog.TeamGameLog(team_id=t_id, season = "2021-22")
    res = preResponse.get_normalized_json()
    return res

@app.route("/api/teamStatsAdvanced", methods=['GET'])
def teamStats():
    preRes = leaguedashteamstats.LeagueDashTeamStats(per_mode_detailed="PerGame", measure_type_detailed_defense="Advanced")
    res = preRes.get_normalized_json()
    return res

@app.route("/api/teamStatsBasic", methods=['GET'])
def teamBasicsStats():
    preRes = leaguedashteamstats.LeagueDashTeamStats(per_mode_detailed="PerGame")
    res = preRes.get_normalized_json()
    return res